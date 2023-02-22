class Shape {
    constructor() {   
        this.color = ""
    }

    setColor(color) {
        this.color = color
    }
}


class Square extends Shape {
    render () {
        return `< Square cx="150" cy="100" r="80" fill="green" />`
    }
}
class Triangle extends Shape {
    render () {
        return `< Triangle cx="150" cy="100" r="80" fill="green" />`
    }
}
class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="green" />
        `
    }
}



export default Square;