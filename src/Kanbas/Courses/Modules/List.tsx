import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <>
      <div>
      <button type="button" className="border btn btn-light">Collapse All</button>
      <button type="button" className="border btn btn-light">View Progress</button>
      <button type="button" className="border btn btn-light"><span className="text-success"><FaCheckCircle /></span> Publish All</button>
      <button type="button" className="border btn btn-danger"><FaPlus /> Module</button>
      <button type="button" className="border btn btn-light"><FaEllipsisV /></button>
      </div>
      <hr/>
      <ul className="list-group wd-modules">

        <li className="list-group-item">
        <div className="row">
        <div className="col-6">
        <span className="float-end">
        <label htmlFor="wd-module-name">Name of New Module:</label><br />
        <input value={module.name}
          id="wd-module-name"
          onChange={(e) =>dispatch(setModule({ ...module, name: e.target.value }))}/>
        </span>
        </div>
        <div className="col-6">
        <label htmlFor="wd-module-description">New Module Description:</label><br />
        <textarea value={module.description}
          id="wd-module-description"
          onChange={(e) =>dispatch(setModule({ ...module, description: e.target.value }))}/>
        </div>
        <button className="btn btn-success" 
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button className="btn btn-secondary" 
        onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
        </div>

      </li>

        {moduleList.filter((module:any) => module.course === courseId)
        .map((module) => (
          <li
            className="list-group-item">
            <div>

              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <button className="btn btn-danger btn-small"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <button className="btn btn-secondary btn-small"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>

                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {
              <ul className="list-group">
                {module.lessons?.map((lesson:any) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;