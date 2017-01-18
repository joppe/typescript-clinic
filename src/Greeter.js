import Backbone from 'backbone';

export class Greeter extends Backbone.View {
    render() {
        this.el.textContent = `Hello ${this.model.get('name')}!`;
    }
}
