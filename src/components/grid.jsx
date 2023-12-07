import daniel from "../assets/images/image-daniel.jpg";
import Jonathan from "../assets/images/image-jonathan.jpg";
import Jeanette from "../assets/images/image-jeanette.jpg";
import Patrick from "../assets/images/image-patrick.jpg";
import Kira from "../assets/images/image-kira.jpg";

const GridsBoxes = () => {
  return (
    <div>
      <div className="sm:w-[30rem] xl:grid xl:grid-cols-8 gap-36 font-barlow xl:w-[75rem] justify-ceter m-auto mt-20 ">
        <div className="xl:grid xl:grid-cols-6 xl:col-span-6 gap-4 ">
          {/* 1 */}
          <div className=" col-span-4 bg-[#7541C8] shadow-2xl rounded-lg max-sm:w-[25rem] max-sm:m-auto sm:w-[30rem] xl:w-[40rem]">
            <div className="bgimg">
              <div className=" m-auto space-y-4 max-sm:w-[311px] sm:w-[311px] xl:w-[35rem] ">
                <div className="flex ">
                  <img
                    className="w-12 mt-9 rounded-full border-4 border-[#8462b9]"
                    src={daniel}
                    alt=""
                  />
                  <div className="ml-5 mt-10  text-[15px] m-auto leading-5">
                    <h1 className="font-[500] text-[#ECF2F8]">
                      Daniel Clifford
                    </h1>
                    <p className="font-[500]  text-[13px]  text-[#be94fd]">
                      {" "}
                      Verified Graduate
                    </p>
                  </div>
                </div>
                <p className="text-[24px] leading-8 text-[#ECF2F8] font-[600]">
                  I received a job offer mid-course, and the subjects I learned
                  were current, if not more so, in the company I joined. I
                  honestly feel I got every penny’s worth.
                </p>
                <div>
                  <p className="font-[500] text-[15px] text-[#be94fd] max-sm:mb-10 max-sm:pb-10 max-sm:w-[285px] sm:w-[285px] sm:pb-10 sm:mb-10 xl:mb-0 xl:pb-0 xl:w-[34rem] ">
                    &quot; I was an EMT for many years before I joined the
                    bootcamp. I’ve been looking to make a transition and have
                    heard some people who had an amazing experience here. I
                    signed up for the free intro course and found it incredibly
                    fun! I enrolled shortly thereafter. The next 12 weeks was
                    the best - and most grueling - time of my life. Since
                    completing the course, I’ve successfully switched careers,
                    working as a Software Engineer at a VR startup. &quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-span-2 bg-[#48556A] shadow-2xl rounded-lg max-sm:w-[25rem] max-sm:m-auto sm:w-[30rem] xl:ml-20 xl:w-[20rem] ">
            <div className=" m-auto space-y-4 max-sm:w-[308px] sm:w-[308px] xl:w-[15rem]">
              <div className="flex">
                <img
                  className="w-12 mt-9 rounded-full border-4 border-[#777e8a]"
                  src={Jonathan}
                  alt=""
                />
                <div className="ml-5 mt-10  text-[15px] m-auto leading-5">
                  <p className="font-[500] text-[#ECF2F8]">Jonathan Walters</p>
                  <p className="font-[500]  text-[13px]  text-[#afb4bf]">
                    Verified Graduate
                  </p>
                </div>
              </div>
              <p className=" text-[22px] leading-8 text-[#ECF2F8] font-[600] sm:w-[18rem] xl:w-[16rem]">
                The team was very supportive and kept me motivated
              </p>
              <div>
                <p className="font-[500] text-[15px] text-[#777e8a] max-sm:mb-10 max-sm:pb-10 sm:pb-10 sm:mb-10 xl:mb-0 xl:pb-0 xl:w-[14rem]">
                  &quot; I started as a total newbie with virtually no coding
                  skills. I now work as a mobile engineer for a big company.
                  This was one of the best investments I’ve made in myself.
                  &quot;
                </p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-span-2 bg-[#FFFFFF] shadow-2xl rounded-lg max-sm:w-[25rem] max-sm:m-auto sm:w-[30rem] xl:w-[20rem] ">
            <div className=" m-auto space-y-4  max-sm:w-[308px] sm:w-[308px] xl:w-[15rem]">
              <div className="flex">
                <img
                  className="w-12 mt-9 rounded-full border-4 border-[#d8cece]"
                  src={Jeanette}
                  alt=""
                />
                <div className="ml-5 mt-10 text-[15px] m-auto leading-5">
                  <p className="font-[500] text-[#19212E]">Jeanette Harmon</p>
                  <p className="font-[500]  text-[13px]  text-[#9e9a9a]">
                    Verified Graduate
                  </p>
                </div>
              </div>
              <p className="text-[25px] leading-8 text-[#19212E] font-[600]">
                An overall wonderful and rewarding experience
              </p>
              <div>
                <p className="font-[500] text-[15px] text-[#9e9a9a] max-sm:mb-10 max-sm:pb-10 sm:pb-10 sm:mb-10 xl:mb-0 xl:pb-0 xl:w-[14rem]">
                  &quot; Thank you for the wonderful experience! I now have a
                  job I really enjoy, and make a good living while doing
                  something I love. &quot;
                </p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className=" col-span-4  bg-[#19212E] shadow-2xl rounded-lg max-sm:w-[25rem] max-sm:m-auto sm:w-[30rem] xl:w-[40rem] xl:ml-14 ">
            <div className="max-sm:w-[311px] sm:w-[311px] xl:w-[35rem]  m-auto space-y-4">
              <div className="flex">
                <img
                  className="w-12 mt-9 rounded-full border-4 border-[#404856]"
                  src={Patrick}
                  alt=""
                />
                <div className="ml-5 mt-10 text-[15px] m-auto leading-5 ">
                  <p className="font-[500] text-[#ECF2F8]">Patrick Abrams</p>
                  <p className="font-[500] text-[#3c475a]">Verified Graduate</p>
                </div>
              </div>
              <p className="text-[24px] leading-8 text-[#ECF2F8]  font-[600]">
                Awesome teaching support from TAs who did the bootcamp
                themselves. Getting guidance from them and learning from their
                experiences was easy.
              </p>
              <div>
                <p className=" font-[500] text-[15px] text-[#a6adb7] max-sm:w-[302px] max-sm:mb-10 max-sm:pb-10 sm:w-[302px] sm:pb-10 sm:mb-10 xl:mb-0 xl:pb-0  xl:w-[34rem] ">
                  &quot; The staff seem genuinely concerned about my progress
                  which I find really refreshing. The program gave me the
                  confidence necessary to be able to go out in the world and
                  present myself as a capable junior developer. The standard is
                  above the rest. You will get the personal attention you need
                  from an incredible community of smart and amazing people.
                  &quot;
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="col-span-2 bg-[#FFFFFF] shadow-2xl rounded-lg max-sm:w-[25rem] max-sm:m-auto sm:w-[30rem] xl:w-[20rem]">
          <div className=" m-auto space-y-4 max-sm:w-[321px] sm:w-[321px] xl:w-[15rem]">
            <div className="flex">
              <img
                className="w-12 mt-9 rounded-full border-4 border-[#d8cece]"
                src={Kira}
                alt=""
              />
              <div className="ml-5 mt-9 text-[15px] leading-5 m-auto">
                <p className="font-[500] text-[#19212E]">Kira Whittle</p>
                <p className="font-[500] text-[13px]  text-[#9e9a9a]">
                  Verified Graduate
                </p>
              </div>
            </div>
            <p className="text-[25px] leading-8 text-[#19212E]  font-[600]">
              Such a life-changing experience. Highly recommended!
            </p>
            <div>
              <div>
                <p className="font-[500] text-[15px]  text-[#a6adb7] max-sm:w-[302px] max-sm:mb-10 max-sm:pb-10 sm:w-[302px] sm:pb-10 sm:mb-10 xl:mb-6 xl:pb-0 xl:w-[14rem]">
                  &quot; Before joining the bootcamp, I’ve never written a line
                  of code. I needed some structure from professionals who can
                  help me learn programming step by step. I was encouraged to
                  enroll by a former student of theirs who can only say
                  wonderful things about the program. The entire curriculum and
                  staff did not disappoint. They were very hands-on and I never
                  had to wait long for assistance. The agile team project, in
                  particular, was outstanding. It took my learning to the next
                  level in a way that no tutorial could ever have. In fact, I’ve
                  often referred to it during interviews as an example of my
                  developent experience. It certainly helped me land a job as a
                  full-stack developer after receiving multiple offers.100%
                  recommend! &quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridsBoxes;
