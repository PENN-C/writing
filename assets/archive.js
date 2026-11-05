const filters = document.querySelector("#archive-filters")
const { q, category, tag } = filters.elements
const count = document.querySelector("#archive-count")
const empty = document.querySelector("#archive-empty")
const posts = Array.from(document.querySelectorAll("[data-post]"), (row) => ({
  row,
  categories: JSON.parse(row.dataset.categories),
  tags: JSON.parse(row.dataset.tags),
}))

function readFilters() {
  const params = new URLSearchParams(location.search)
  q.value = params.get("q") || ""
  category.value = params.get("category") || ""
  tag.value = params.get("tag") || ""
  renderPosts()
}

function renderPosts() {
  const query = q.value.trim().toLocaleLowerCase()
  let matches = 0
  for (const post of posts) {
    const text = [post.row.textContent, ...post.tags].join(" ").toLocaleLowerCase()
    const visible = (!category.value || post.categories.includes(category.value))
      && (!tag.value || post.tags.includes(tag.value))
      && text.includes(query)
    post.row.hidden = !visible
    if (visible) matches += 1
  }
  count.textContent = matches + " 篇文章"
  empty.hidden = matches > 0
}

function updateFilters() {
  const url = new URL(location.href)
  for (const field of [q, category, tag]) {
    const value = field.value.trim()
    if (value) url.searchParams.set(field.name, value)
    else url.searchParams.delete(field.name)
  }
  history.replaceState(null, "", url)
  renderPosts()
}

filters.addEventListener("input", updateFilters)
filters.addEventListener("submit", (event) => event.preventDefault())
filters.addEventListener("reset", (event) => {
  event.preventDefault()
  q.value = category.value = tag.value = ""
  updateFilters()
})
window.addEventListener("popstate", readFilters)
readFilters()
filters.hidden = false
