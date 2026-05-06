import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = process.cwd()
const sourceRoots = ['src', 'index.html']
const expectedImages = {
  'move-hero-battle-ropes.jpg': [1024, 1536],
  'move-program-functional.jpg': [1536, 1024],
  'move-program-strength.jpg': [1536, 1024],
  'sport-evening-training.jpg': [2048, 1152],
  'sport-program-equipment.jpg': [1024, 1024],
}

const failures = []

function walk(path) {
  const absolutePath = join(root, path)
  const stats = statSync(absolutePath)

  if (stats.isFile()) {
    return [absolutePath]
  }

  return readdirSync(absolutePath).flatMap((entry) => walk(join(path, entry)))
}

function readSourceFiles() {
  return sourceRoots
    .flatMap((path) => walk(path))
    .filter((path) => /\.(css|html|tsx|ts)$/.test(path))
    .map((path) => ({
      path,
      relativePath: relative(root, path),
      text: readFileSync(path, 'utf8'),
    }))
}

function jpegSize(path) {
  const buffer = readFileSync(path)
  let offset = 2

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      break
    }

    const marker = buffer[offset + 1]
    const length = buffer.readUInt16BE(offset + 2)

    if (marker >= 0xc0 && marker <= 0xc3) {
      return [buffer.readUInt16BE(offset + 7), buffer.readUInt16BE(offset + 5)]
    }

    offset += 2 + length
  }

  throw new Error(`Could not read JPEG dimensions for ${path}`)
}

const sourceFiles = readSourceFiles()
const allSource = sourceFiles.map(({ text }) => text).join('\n')

for (const { relativePath, text } of sourceFiles) {
  if (/overflow-x\s*:\s*(clip|hidden)/.test(text)) {
    failures.push(`${relativePath}: remove overflow-x clipping/hiding and fix the overflowing element instead`)
  }

  if (relativePath.endsWith('.css') && /(?:width|min-width|max-width)\s*:\s*100vw/.test(text)) {
    failures.push(`${relativePath}: avoid 100vw layout widths because they can include scrollbar width`)
  }

  const rootImagePathMatches = text.match(/(?<!https:\/\/denisnosov22\.github\.io\/sport-club-landing)\/images\//g) ?? []
  if (rootImagePathMatches.length > 0) {
    failures.push(`${relativePath}: found root-absolute /images/ path`)
  }
}

for (const [fileName, expectedSize] of Object.entries(expectedImages)) {
  const actualSize = jpegSize(join(root, 'public', 'images', fileName))
  if (actualSize.join('x') !== expectedSize.join('x')) {
    failures.push(`public/images/${fileName}: expected ${expectedSize.join('x')}, got ${actualSize.join('x')}`)
  }

  const [width, height] = expectedSize
  const dimensionsPattern = new RegExp(`(?:${fileName}[\\s\\S]{0,320}(?:width=["']?${width}|width:\\s*${width})[\\s\\S]{0,160}(?:height=["']?${height}|height:\\s*${height}))|(?:${fileName}[\\s\\S]{0,320}(?:height=["']?${height}|height:\\s*${height})[\\s\\S]{0,160}(?:width=["']?${width}|width:\\s*${width}))`)

  if (!dimensionsPattern.test(allSource)) {
    failures.push(`${fileName}: source does not expose matching intrinsic dimensions ${width}x${height}`)
  }
}

if (failures.length > 0) {
  console.error('Layout verification failed:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log('Layout verification passed: image dimensions, root image paths, and overflow guards are clean.')
