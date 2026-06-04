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
    const first = group.find(v => typeof v.type !== 'symbol')
    const icon = extractIcon(first)
    if (icon) return { icon, content: group.filter(v => v !== first) }
    return { icon: null, content: group }
  })
}

// <img>、<p><img /></p>、Iconify コンポーネント（unplugin-icons）を検出する
function extractIcon(vnode) {
  if (!vnode) return null
  // <img> タグ
  if (vnode.type === 'img') return vnode
  // markdown-it は <img> を <p> で包むため両方検出する
  if (vnode.type === 'p' && Array.isArray(vnode.children)) {
    const els = vnode.children.filter(c => typeof c.type === 'string')
    if (els.length === 1 && els[0].type === 'img') return els[0]
  }
  // Iconify / unplugin-icons コンポーネント（<carbon:user /> など）
  if (typeof vnode.type === 'object' || typeof vnode.type === 'function') return vnode
  return null
}
