export default async function Shipment() {
    const response = await fetch("http://localhost:3000/api/shipengine/get-rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shipToAddress: {
            name: "Michael Smith",
            phone: "+1 555 987 6543",
            addressLine1: "456 Oak Avenue",
            addressLine2: "Suite 200",
            cityLocality: "Los Angeles",
            stateProvince: "CA",
            postalCode: "90001",
            countryCode: "US",
            addressResidentialIndicator: "no",
          },
          packages: [
            { weight: { value: 5, unit: "ounce" }, dimensions: { height: 3, width: 15, length: 10, unit: "inch" } },
          ],
        }),
      });
      
      const data = await response.json();
      console.log(data);
      return(
        <div>data</div>
      )

}