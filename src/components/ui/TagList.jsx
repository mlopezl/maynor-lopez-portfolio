function TagList({ items }) {
  return <div className="tag-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
}

export default TagList
