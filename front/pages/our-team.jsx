import { InternalBanner, TitleBicolor, Query } from '../components'
import GetBestEmployeeQuery from "../graphql/team-best-employee";
import GetAllEmployeesQuery from "../graphql/team-employees";
import Image from 'next/image';
import { itim } from '../constants/fonts';

const ourteam = () => {
  return (
    <>
      <InternalBanner title="Our team"/>

      <main className="max-w-[1100px] m-auto px-5 py-14">
        <TitleBicolor title1="Best employee of" title2="the month" />

        <div className='flex flex-col md:flex-row gap-5 my-10'>

          <Query query={GetBestEmployeeQuery}>
            {({data:getBestEmployee}) => {
              const coder = getBestEmployee.teamBestEmployees[0]
              
              return(
                <>
                 <div className='w-[100%] md:w-[50%]'>
                    <Image
                      src={coder.image.url}
                      width={400}
                      height={600}
                      priority
                      alt={coder.name}
                      className="m-auto w-auto"
                    /> 

                    <ul className='relative bg-black/70 -top-[6rem] text-white py-5 text-center'>
                      <li className='text-2xl'>{coder.name}</li>
                      <li>{coder.role}</li>
                    </ul>
                  </div> 

                  <p className='w-[100%] md:w-[50%]'>
                    {coder.description}
                  </p>
                </>
              )

            }}
          </Query>

        </div>

        <div className='text-center pt-16 pb-10'>
          <TitleBicolor title1="Our" title2="team" />
        </div>

        <Query query={GetAllEmployeesQuery}>
            {({data:getAllEmployees}) => {
              const coder = getAllEmployees.teamEmployees
              console.log(coder)

              return(
                <ul className='flex flex-wrap gap-1 justify-center'>

                  {coder.map((employee) => (
                    <li className='group w-[270px] h-[380px] overflow-hidden rounded-lg'>
                      <Image
                        src={employee.image.url}
                        width={270}
                        height={270}
                        priority
                        alt={employee.name}
                        className="w-[270px] h-auto"
                      /> 
                      <div className='flex flex-col text-center relative bg-black/70 text-white py-5 h-full top-0 group-hover:-top-[400px] z-50 justify-center duration-300 rounded-lg'> 
                        <p className={`${itim.className} text-3xl tracking-tight text-basic-green`}>{employee.name}</p>
                        <p>{employee.role}</p>
                      </div>
                    </li> 
                  ))}

                </ul>
              )
            }}
          </Query>


      </main>
    </>
  )
}

export default ourteam