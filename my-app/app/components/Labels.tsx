export default async function Labels(){
    const response = await fetch("/api/shipengine/create-label", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rateId: "YOUR_RATE_ID" }),
      });
      
      const data = await response.json();
      console.log(data);
    return(
        <div>Labels</div>
    )
}