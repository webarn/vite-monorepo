import RButton from './Button'

export const components = {
  RButton,
}

export default {
  install: app => Object.keys(components).forEach((c) => {
    app.use(components[c])
  }),
}
