import React from "react";
import "./About.scss";
const About = () => {
  return (

      <div className="about_container">
        <ul>
          <li>
            <svg
              width="40"
              height="40"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.757 0.999976L11.757 2.99998H2V17H16V7.24298L18 5.24298V18C18 18.2652 17.8946 18.5195 17.7071 18.7071C17.5196 18.8946 17.2652 19 17 19H1C0.734784 19 0.48043 18.8946 0.292893 18.7071C0.105357 18.5195 0 18.2652 0 18V1.99998C0 1.73476 0.105357 1.48041 0.292893 1.29287C0.48043 1.10533 0.734784 0.999976 1 0.999976H13.757ZM17.485 0.0999756L18.9 1.51598L9.708 10.708L8.296 10.711L8.294 9.29398L17.485 0.0999756Z"
                fill="green"
              />
            </svg>
            <span>
              Add the necessary questions with one click, sort with one move
            </span>
          </li>
          <li>
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.083 14.2L19.285 14.921C19.3592 14.9654 19.4205 15.0283 19.4632 15.1034C19.5058 15.1786 19.5282 15.2636 19.5282 15.35C19.5282 15.4364 19.5058 15.5214 19.4632 15.5966C19.4205 15.6718 19.3592 15.7346 19.285 15.779L10.515 21.041C10.3595 21.1345 10.1814 21.1838 10 21.1838C9.81856 21.1838 9.64053 21.1345 9.485 21.041L0.715 15.779C0.640846 15.7346 0.579465 15.6718 0.536846 15.5966C0.494227 15.5214 0.471825 15.4364 0.471825 15.35C0.471825 15.2636 0.494227 15.1786 0.536846 15.1034C0.579465 15.0283 0.640846 14.9654 0.715 14.921L1.917 14.2L10 19.05L18.083 14.2ZM18.083 9.50001L19.285 10.221C19.3592 10.2654 19.4205 10.3283 19.4632 10.4034C19.5058 10.4786 19.5282 10.5636 19.5282 10.65C19.5282 10.7364 19.5058 10.8214 19.4632 10.8966C19.4205 10.9718 19.3592 11.0346 19.285 11.079L10 16.65L0.715 11.079C0.640846 11.0346 0.579465 10.9718 0.536846 10.8966C0.494227 10.8214 0.471825 10.7364 0.471825 10.65C0.471825 10.5636 0.494227 10.4786 0.536846 10.4034C0.579465 10.3283 0.640846 10.2654 0.715 10.221L1.917 9.50001L10 14.35L18.083 9.50001ZM10.514 0.309009L19.285 5.57101C19.3592 5.6154 19.4205 5.67826 19.4632 5.75344C19.5058 5.82863 19.5282 5.91358 19.5282 6.00001C19.5282 6.08643 19.5058 6.17139 19.4632 6.24657C19.4205 6.32176 19.3592 6.38462 19.285 6.42901L10 12L0.715 6.42901C0.640846 6.38462 0.579465 6.32176 0.536846 6.24657C0.494227 6.17139 0.471825 6.08643 0.471825 6.00001C0.471825 5.91358 0.494227 5.82863 0.536846 5.75344C0.579465 5.67826 0.640846 5.6154 0.715 5.57101L9.485 0.309009C9.64053 0.215565 9.81856 0.166199 10 0.166199C10.1814 0.166199 10.3595 0.215565 10.515 0.309009H10.514ZM10 2.33201L3.887 6.00001L10 9.66801L16.113 6.00001L10 2.33201Z"
                fill="blue"
              />
            </svg>

            <span>
              Any number of questions of different types placed on one or more
              pages
            </span>
          </li>
          <li>
            <svg
              width="40"
              height="40"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.576 15.2711L6.46599 12.4841C5.97548 12.971 5.3518 13.3018 4.67358 13.4347C3.99535 13.5677 3.29295 13.4969 2.65491 13.2312C2.01688 12.9655 1.47178 12.5169 1.08834 11.9419C0.704894 11.3669 0.500275 10.6912 0.500275 10.0001C0.500275 9.30898 0.704894 8.63331 1.08834 8.0583C1.47178 7.48329 2.01688 7.03468 2.65491 6.76901C3.29295 6.50335 3.99535 6.43253 4.67358 6.56548C5.3518 6.69844 5.97548 7.02921 6.46599 7.51611L11.576 4.72911C11.4007 3.90685 11.5273 3.04897 11.9326 2.31236C12.3378 1.57576 12.9947 1.00964 13.7831 0.717544C14.5714 0.425446 15.4386 0.426885 16.226 0.721597C17.0134 1.01631 17.6684 1.5846 18.0712 2.32255C18.474 3.0605 18.5978 3.91879 18.4198 4.74046C18.2418 5.56214 17.774 6.2923 17.1019 6.79741C16.4298 7.30252 15.5984 7.54884 14.7596 7.49131C13.9208 7.43378 13.1308 7.07625 12.534 6.48411L7.42399 9.27111C7.52592 9.75177 7.52592 10.2485 7.42399 10.7291L12.534 13.5161C13.1308 12.924 13.9208 12.5664 14.7596 12.5089C15.5984 12.4514 16.4298 12.6977 17.1019 13.2028C17.774 13.7079 18.2418 14.4381 18.4198 15.2598C18.5978 16.0814 18.474 16.9397 18.0712 17.6777C17.6684 18.4156 17.0134 18.9839 16.226 19.2786C15.4386 19.5733 14.5714 19.5748 13.7831 19.2827C12.9947 18.9906 12.3378 18.4245 11.9326 17.6879C11.5273 16.9513 11.4007 16.0934 11.576 15.2711Z"
                fill="purple"
              />
            </svg>

            <span>
              Embed the survey directly on your website or send the link to your
              friends
            </span>
          </li>
          <li>
            <svg
              width="40"
              height="40"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM15.363 14.233C16.8926 14.6261 18.2593 15.4918 19.2683 16.7068C20.2774 17.9218 20.8774 19.4242 20.983 21H18C18 18.39 17 16.014 15.363 14.233ZM13.34 11.957C14.178 11.2075 14.8482 10.2893 15.3066 9.26275C15.765 8.23616 16.0013 7.12429 16 6C16.0021 4.63347 15.6526 3.28937 14.985 2.097C16.1176 2.32459 17.1365 2.93737 17.8685 3.8312C18.6004 4.72502 19.0002 5.84473 19 7C19.0003 7.71247 18.8482 8.41676 18.5541 9.06567C18.26 9.71459 17.8305 10.2931 17.2946 10.7625C16.7586 11.2319 16.1285 11.5814 15.4464 11.7874C14.7644 11.9934 14.0462 12.0512 13.34 11.957Z"
                fill="red"
              />
            </svg>

            <span>Find out how people answered questions</span>
          </li>
        </ul>
      </div>

  );
};
export default About;