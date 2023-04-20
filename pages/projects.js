import Layout from "./components/layout"
import Head from "next/head"
import ProjectItem from "./components/projects/project-item"
import { TOKEN,DATABASE_ID } from "../config"
export default function Projects({projects}){

    console.log(projects)
    return(
        <Layout>

        <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <Head>
        <title>고한성의 포트폴리오 입니다.</title>
        <meta name="description" content="방문해 주셔서 감사합니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">프로젝트 수 : 
        
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
        
        </h1>


       <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
                    {projects.results.map((project) => (
                        <ProjectItem key={project.id} data={project}/>
   
    ))}

            </div>

        </div>


        </Layout>
    );
}

export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            

                 "sorts": [
                    {
                        "property": "Projects",
                        "direction": "ascending"
                    }
                ],
           
            
            page_size: 100})
      };
      
     const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

     const projects = await res.json()
     

     const projectsNames = projects.results.map(project => project.properties.Projects.title[0].plain_text)

        console.log(`projectsNames : ${projectsNames}`);

    return {
      props: {projects},
      revalidate: 1 // will be passed to the page component as props
    }
  }