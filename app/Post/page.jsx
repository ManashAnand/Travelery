"use client";
import Calender from "@/components/Calender";
import TimePicker from "@/components/TImepicker/Timepicker";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Post = () => {
  const [char, setChar] = useState("");
  const [role, setRole] = useState("Equity");
  const [name, setName] = useState("");
  const [no, setNo] = useState("");
  const [dest, setLocation] = useState("");
  const [vehicle, setvehicle] = useState("");

  const [calendarValue, setCalendarValue] = useState(new Date());
  const [timePickerValue, setTimePickerValue] = useState("12:00 PM");

  const router = useRouter();

  const handleCalendarChange = (value) => {
    console.log("from post page");
    const formattedDate = value.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setCalendarValue(formattedDate);
    console.log("Calendar Value:", formattedDate);
  };

  // Callback function to handle time picker value change
  const handleTimePickerChange = (value) => {
    console.log("from post page");
    setTimePickerValue(value);
    console.log("Time Picker Value:", value);
  };

  const addDesc = (e) => {
    setChar(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (char.length > 280) {
      alert("Please enter less than 280 characters");
      return;
    }
    console.log(char.split(" "));
    const descpChar = char.split(" ");

    const wordsToCheck = ["fuck", "sex", "porn" ,"chod","madharchod","behenchod","lund","chut","motherfucker","bitch","asshole","muslim","masjid"];
    // I know it's seem unappropriate but it's a college webapp

    const containsAnyWord = descpChar.some(item => {
      return wordsToCheck.some(word => item.includes(word));
    });

    if (containsAnyWord) {
      alert("You can not abuse here ");
      return;
    } 
    // console.log(role);
    // console.log(name);
    // console.log(no);
    // console.log(dest.toLowerCase());
    // console.log(vehicle);
    // console.log(calendarValue);
    // console.log(timePickerValue);

    try {
      const res = await axios.post(
        "https://vbps4gqg55.execute-api.ap-south-1.amazonaws.com/",
        {
          descp: char,
          location: dest.toLowerCase(),
          numberOfPerson: no,
          dateOfTravel: calendarValue,
          timeOfTravel: timePickerValue,
          preferredVehicle: vehicle,
          name: name,
          role,
        }
      );
      console.log(res);
      if(res.status  == 200){
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <>
      <div className="inline-flex rounded-md shadow-sm mt-10 " role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm  font-medium text-gray-900 bg-[#654C4F] border border-gray-900 rounded-s-lg  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:text-white dark:border-white dark:text-white "
          onClick={(e) => setRole("Equity")}
        >
          Equity
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-[#654C4F] border-t border-b border-gray-900  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:text-white dark:border-white dark:text-white "
          onClick={(e) => setRole("Free")}
        >
          Free
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-[#654C4F] border border-gray-900 rounded-e-lg  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:text-white dark:border-white dark:text-white "
          onClick={(e) => setRole("Testimonials")}
        >
          Tesitimonial
        </button>
      </div>

      <div className="max-w-2xl h-full mt-10 w-full bg-[#654C4F] p-8 rounded-lg shadow-xl border mb-10">
        <form>
          <div className="mb-6">
            <label
              htmlFor="postContent"
              className="block  text-sm font-bold mb-2 text-white"
            >
              Post Content:
            </label>
            <textarea
              id="postContent"
              name="postContent"
              rows={4}
              className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
    sm:leading-5 resize-none focus:outline-none focus:border-blue-500"
              placeholder="What's on your mind?"
              defaultValue={""}
              onChange={addDesc}
            />
            <span className="text-white text-sm">
              Max {280 - char.length} characters
            </span>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white  focus:outline-none focus:ring-0  peer"
                placeholder=" "
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                for="floating_company"
                className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>

            {(role == "Equity" || role == "Free") && (
              <>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white  focus:outline-none focus:ring-0  peer"
                    placeholder=" "
                    required
                    value={no}
                    onChange={(e) => setNo(e.target.value)}
                  />
                  <label
                    for="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number (123-456-7890)
                  </label>
                </div>
              </>
            )}
          </div>
          <div className=" w-full flex justify-between sm:flex-row flex-col">
            <Calender value={calendarValue} onChange={handleCalendarChange} />
            <TimePicker
              value={timePickerValue}
              onChange={handleTimePickerChange}
            />
          </div>
          {(role == "Equity" || role == "Free") && (
            <div class="max-w-full mx-auto mb-4">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Location
              </label>
              <textarea
                id="message"
                rows="1"
                class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black"
                placeholder="Enter the location you want to go...."
                value={dest}
                onChange={(e) => setLocation(e.target.value)}
              ></textarea>
            </div>
          )}

          {role == "Equity" && (
            <>
              <div class="max-w-full mx-auto mb-4">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Preferred Vehicle
                </label>
                <textarea
                  id="message"
                  rows="1"
                  class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black"
                  placeholder="Enter the vehicle you want to ride on ... "
                  value={vehicle}
                  onChange={(e) => setvehicle(e.target.value)}
                ></textarea>
              </div>
            </>
          )}

          {/* Submit Button and Character Limit Section */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
              onClick={handleSubmit}
            >
              {" "}
              Post{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={19}
                height={19}
                viewBox="0 0 24 24"
                id="send"
                fill="#fff"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Post;
