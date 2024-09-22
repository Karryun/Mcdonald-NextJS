export default async function Get_Data() {
    const response = await fetch("../api/progress", {method:"GET"});
    const jsondata = await response.json();
    return jsondata;
}