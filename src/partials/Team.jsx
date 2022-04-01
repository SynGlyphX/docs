import React from "react";

import TeamImage01 from "../images/team-member-01.png";
import TeamImage02 from "../images/team-member-02.png";
import TeamImage03 from "../images/team-member-03.png";
import TeamImage04 from "../images/team-member-04.png";
import TeamImage05 from "../images/team-member-05.png";
import TeamImage06 from "../images/team-member-06.png";
// import TeamImage07 from "../images/team-member-07.jpg";
// import TeamImage08 from "../images/team-member-08.jpg";
// import TeamImage09 from "../images/team-member-09.jpg";
// import TeamImage10 from "../images/team-member-10.jpg";

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">
              Your future teammates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est.
            </p>
          </div>

          {/* Team members */}
          <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
            <div
              className="flex flex-wrap justify-center -m-5 lg:-my-7"
              data-aos-id-team
            >
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={TeamImage01}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Danny Hill
                  </h4>
                  <a className="p-2" href="#0">
                    <svg
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                        fill="#1DA1F2"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={TeamImage02}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Bryan Holster
                  </h4>
                  <a className="p-2" href="#0">
                    <svg
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                        fill="#1DA1F2"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={TeamImage03}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Michael Wicks
                  </h4>
                  <a className="p-2" href="#0">
                    <svg
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                        fill="#1DA1F2"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={TeamImage04}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    James Graham
                  </h4>
                  <a className="p-2" href="#0">
                    <svg
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                        fill="#1DA1F2"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={TeamImage05}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Ryan Hooley
                  </h4>
                  <a className="p-2" href="#0">
                    <svg
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                        fill="#1DA1F2"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={TeamImage01}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Ryan Kreager
                  </h4>
                  <a className="p-2" href="#0">
                    <svg
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                        fill="#1DA1F2"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={TeamImage01}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Ryan Kreager
                  </h4>
                  <a className="p-2" href="#0">
                    <svg
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                        fill="#1DA1F2"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={TeamImage01}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Jack Looney
                  </h4>
                  <a className="p-2" href="#0">
                    <svg
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                        fill="#1DA1F2"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={TeamImage01}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Raunaq Kapoor
                  </h4>
                  <a className="p-2" href="#0">
                    <svg
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                        fill="#1DA1F2"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* 1st member */}
              <div
                className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-team]"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full mb-2"
                    src={TeamImage01}
                    width="80"
                    height="80"
                    alt="Team member 01"
                  />
                  <h4 className="dark:text-gray-300 text-lg font-medium">
                    Aarik Gulaya
                  </h4>
                  <a className="p-2" href="#0">
                    <svg
                      width="16"
                      height="13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                        fill="#1DA1F2"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
