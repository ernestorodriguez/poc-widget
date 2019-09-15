class CelsiusUnit {
    get(temp) {
        return this.temp = Math.trunc(temp - (273.15));
    }
}

export default CelsiusUnit;
