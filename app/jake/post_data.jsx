export default async function Post_Data(clickNum) {
    const obj = {"name":"jake", "progress":clickNum};
    const response = await fetch("../api/progress", {method:"POST", body:JSON.stringify(obj)});
    console.log(obj);
}