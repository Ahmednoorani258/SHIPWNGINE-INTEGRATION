export default async function Label(){
    
    const response = await fetch("http://localhost:3000/api/shipengine/create-labels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rateId: "se-51547724" }),
      });
      
      const data = await response.json();
      console.log(data);
    
    return(
        <div>Label</div>
    )
}