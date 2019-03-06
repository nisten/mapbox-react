import React from 'react'

const ipToken = '29b43a4e7b0057'


class Form extends React.Component {
    ipLocation = async (e) => {
        e.preventDefault()
        const api_call = await fetch(`https://ipinfo.io?token=${ipToken}`)
        const data = api_call.json()
        console.log(data.country)
    }
    render() {
        return (
            <form>
                <input type="text" name="city" placeholder="Enter an IP address..."/>
                <button>Get Map</button>
            </form>
        )
    }
}

export default Form