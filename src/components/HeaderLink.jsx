
function HeaderLink({href, classType, label}) {
  return (
    <a href={href} className={classType}>
      {label}
    </a>
  )
}

export default HeaderLink
