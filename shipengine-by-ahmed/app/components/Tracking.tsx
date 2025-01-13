export default async function Tracking(){
  const LabelID = "se-17365394"as string
    const response = await fetch(`http://localhost:3000/api/shipengine/track-shipment/${LabelID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const data = await response.json();
      console.log(data);
      return(
        <div>Tracking</div>
    )
}