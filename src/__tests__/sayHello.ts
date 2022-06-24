const sayHello = (name: string | void) => {
  if (!name) {
    return 'Hello human!'
  }

  return `Hello ${name}!`
}

export default sayHello
