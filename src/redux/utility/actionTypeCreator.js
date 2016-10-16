export default (dirname, types) =>
    types.reduce((reduction, type) => ({
        ...reduction, [type]: `${dirname}//:${type}`
    }), {})
