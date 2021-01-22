import sanityClient from "@sanity/client"\

export default sanityClient({
    projectId: "6pjcdlqc",
    dataset: "production",
    useCdn:true
})