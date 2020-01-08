import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render() {
        return (
            <div>
                <img
                    ref={this.imageRef}
                    alt={this.props.alt}
                    src={this.props.image}
                />
            </div>
        )
    }
}

export default ImageCard;