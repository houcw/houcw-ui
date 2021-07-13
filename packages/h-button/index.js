import HButton from './src/h-button'

HButton.install = app => {
    app.component(HButton.name, HButton)
}

export default HButton