
    let inchToFeetConversionFactor = 1/12;
    let feetToMetreConversionFactor = 0.3048;
    let lengthInInches =  60;
    let breadthInInches = 40;
    let areaInSqInPerPlot = lengthInInches * breadthInInches;
    let areaInSqmPerPlot = areaInSqInPerPlot * (inchToFeetConversionFactor * feetToMetreConversionFactor) ** 2;
    let areaOf25Plots = 25 * areaInSqmPerPlot;
    console.log("Area of 25 Plots: " + areaOf25Plots);