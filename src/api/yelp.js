import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer CHVaEabUWwG9ourBIqJSVWto7PrtQlHVs6sg9eVZxiaSiVNktJR_aI2kn7XmfwcnQlxYPTMSLx6TnC0PecL0SyCkW76UDMsi1UJyqU55YEYNUjrXiniomXS60GmEXnYx'
    }

})