import { useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { RiFlightLandFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { TbArrowsTransferDown } from "react-icons/tb";
import Calendar from "./Calendar";
import { FaUser } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";

const TripSearch = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="trip_search_container">
      <div className="trip_search">
        <div className="tabs">
          <button
            className={`tab ${tab === 0 && "active"}`}
            type="button"
            onClick={() => setTab(0)}
          >
            ذهاب فقط
          </button>
          <button
            className={`tab ${tab === 1 && "active"}`}
            type="button"
            onClick={() => setTab(1)}
          >
            رحلة ذهاب و عودة
          </button>
          <button
            className={`tab ${tab === 2 && "active"}`}
            type="button"
            onClick={() => setTab(2)}
          >
            رحلات متعددة
          </button>
        </div>
        <div className="search">
          <div className="transfer">
            <div className="button">
              <button type="button">
                <TbArrowsTransferDown />
                <span className="hidden">.</span>
              </button>
            </div>
            <div className="from transfer_card">
              <div className="country">
                <BiTargetLock />
                <div className="info">
                  <h6>من</h6>
                  <h6>الجيزة, مصر</h6>
                </div>
              </div>
              <MdOutlineFlightTakeoff className="flight" />
            </div>
            <div className="to transfer_card">
              <div className="country">
                <SlLocationPin />
                <div className="info">
                  <h6>إلى</h6>
                  <h6>الرياض, السعودية</h6>
                </div>
              </div>
              <RiFlightLandFill className="flight" />
            </div>
          </div>

          <div className="calendars">
            <Calendar />
            <Calendar />
          </div>

          <div className="selects">
            <div className="select">
              <label htmlFor="adult">adults</label>
              <FaUser />
              <select name="adult" id="adult">
                <option value="1">1 بالغ</option>
                <option value="2">2 بالغ</option>
                <option value="3">3 بالغ</option>
                <option value="4">4 بالغ</option>
                <option value="5">5 بالغ</option>
              </select>
            </div>
            <div className="select">
              <label htmlFor="type">type</label>
              <AiOutlineDollar />
              <select name="type" id="type">
                <option value="اقتصادية">اقتصادية</option>
                <option value="غالية">غالية</option>
              </select>
            </div>
          </div>

          <button type="button">بحث</button>
        </div>
      </div>
    </div>
  );
};

export default TripSearch;
