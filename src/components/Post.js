function Post(props) {
  return (
    <li>
      <span>{props.post.content}</span> <input type="checkbox" defaultChecked={props.post.liked} />
    </li>
  )
}

export { Post };

