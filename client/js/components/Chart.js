import React from "react"
import Base from "components/Base"

// import history from "../dummy/history"

// console.log(history)

// function getChartSize() {

// }

export default class Chart extends Base {

    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0,
            width: 400,
            height: 300
        }
    }

    // componentDidMount(){
    //     window.addEventListener("resize", ()=>{
    //         var size = getChartSize()
    //         this.setState({
    //             width: size.width,
    //             height: size.height
    //         })
    //     })
    // }

    getPriceLinePath() {
        var price = this.props.source.get('price')
        console.log(price)
        if (price == null) {
            return "M0,0"
        } else {
            var d = ""

            price.forEach((p) => {
                console.log(p)
            })
            return d
        }
    }

    componentDidUpdate() {
        console.log(this.props.source)
    }

    render() {
        return (
            <div className="chart">
                <svg width={this.state.width} height={this.state.height}>
                    <path
                        className="chart_line-price"
                        d={this.getPriceLinePath()}/>
                </svg>
            </div>
        )
    }
};
