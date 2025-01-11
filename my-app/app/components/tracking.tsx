export default async function Tracking (labelId:string){
    const response = await fetch(`/api/shipengine/tracking/${labelId}`, {
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