import Layout from "./components/layout"
import Head from "next/head"
export default function AboutMe(){

   
    return(
        <Layout>

        <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <Head>
      
      </Head>

      <div className="text-4xl mb-6 flex items-center ">
          <svg
            className="mr-4"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
            width="40"
            height="40"
          >
            <path class="cls-1" d="M29,9H24a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1V28a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1h8a2,2,0,0,0,2,
            2h6a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H13a2,2,0,0,0-2,2V9H3a3,3,0,0,0-3,3V28a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V12A3,3,0,0,0,29,9ZM13,
            3h6v8H13Z"/><path class="cls-1" d="M4,26a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1,5,5,0,0,0-2.207-4.145,4,4,0,1,0-5.586,0A5,5,0,0,0,
            4,26Zm3-7a2,2,0,1,1,2,2A2,2,0,0,1,7,19Zm2,4a3.006,3.006,0,0,1,2.829,2H6.171A3.006,3.006,0,0,1,9,23Z"/>
            <path class="cls-2" d="M25,25H19a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"/>
            <path class="cls-2" d="M27,21H19a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"/>
            <path class="cls-2" d="M27,17H19a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"/>
            <path class="cls-2" d="M16.02,9a1,1,0,0,1-.01-2h.01a1,1,0,0,1,0,2Z"/>
          </svg>
          <span className="whitespace-nowrap">About me</span>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
  <p className="text-xl">이름 : 고한성</p>
  <p className="text-xl">전화번호 : 010-8455-7937</p>
  <p className="text-xl">이메일 : hsgs5891@gmail.com</p>
  <p className="text-xl">지역 : 인천 남동구</p>
  <p className="text-xl">학력 : Centennial College (Electrical Engineering Technician)</p>
  <p className="text-xl">교육 : 코드스테이츠 백엔드 42기</p>
  </div>


        </div>


        </Layout>
    );
}


  