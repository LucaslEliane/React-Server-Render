const _addClass = (className, newClass) => {
  if (newClass === "") {
    return className
  }
  let classNameArr = className.split(" ")
  ~classNameArr.indexOf(newClass.trim()) || classNameArr.push(newClass.trim())
  return classNameArr.join(" ").trim()
}

export default _addClass