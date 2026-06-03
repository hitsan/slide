export function splitByHr(slotFn) {
  if (!slotFn) return []
  const vnodes = slotFn()
  const groups = []
  let current = []
  for (const vnode of vnodes) {
    if (vnode.type === 'hr') {
      if (current.some(v => typeof v.type === 'string')) {
        groups.push([...current])
        current = []
      }
    } else {
      current.push(vnode)
    }
  }
  if (current.some(v => typeof v.type === 'string')) groups.push(current)
  return groups.map(group => {
    const first = group.find(v => typeof v.type === 'string')
    const img = extractImg(first)
    if (img) return { icon: img, content: group.filter(v => v !== first) }
    return { icon: null, content: group }
  })
}

// markdown-it は <img> をインライン要素とみなし <p> で包むため、<p><img /></p> も検出する
function extractImg(vnode) {
  if (!vnode) return null
  if (vnode.type === 'img') return vnode
  if (vnode.type === 'p' && Array.isArray(vnode.children)) {
    const els = vnode.children.filter(c => typeof c.type === 'string')
    if (els.length === 1 && els[0].type === 'img') return els[0]
  }
  return null
}
