import React from 'react';
import { useState } from 'react';
import Tooltip from './Tooltip';
import Link from './Link';
import WordpressCounterBox from './WordpressCounterBox';
import { toaster, router } from '../lib';
import { deleteProject, reactivateProject } from '../api/projects';
import AreYouSureRomanian from './AreYouSureRomanian';
import { formatDistanceToNow } from 'date-fns';
import dateLocaleRo from '../functions/dateLocaleRo';
import { ro } from 'date-fns/locale';
import ReactivateProject from './ReactivateProject';
const Project = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      toaster.success('Proiectul a fost sters cu succes!');
      hideModal();
      router.push('/admin/projects');
    } catch (err) {
      toaster.error('Proiectul nu a putut fi sters!');
    }
  };

  const handleReactivate = async (id) => {
    try {
      await reactivateProject(id);
      toaster.success('Proiectul a fost reactivat cu succes!');
      hideModal();
      router.push('/admin/projects');
    } catch (err) {
      toaster.error('Proiectul nu a putut fi reactivat!');
    }
  };
  return (
    <div>
      <div className="card p-6 gap-6 bg-white max-w-5xl">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-4">
              <i className={data.project.icon + ' text-5xl text-primary dark:text-slate-200'}></i>
              <h2 className="text-3xl font-semibold dark:text-white">{data.project.name}</h2>
            </div>
            <div className="flex gap-2 dark:text-slate-300">
              {data.project.active && (
                <Tooltip icon="fas fa-circle-check text-3xl text-secondary">Activ</Tooltip>
              )}
              {data.project.important && (
                <Tooltip icon="fas fa-exclamation-circle text-3xl text-primary">Important</Tooltip>
              )}
              {data.project.urgent && (
                <Tooltip icon="fas fa-clock text-3xl text-accent">Urgent</Tooltip>
              )}
            </div>
          </div>

          <div className="">
            <h3 className="text-2xl text-semibold text-primary dark:text-slate-200">Descriere</h3>
            <p className="text-lg dark:text-slate-400">{data.project.description}</p>
          </div>
          <div className="">
            <h3 className="text-2xl text-semibold text-primary dark:text-slate-200">Status</h3>
            <p className="text-lg dark:text-slate-400">{data.project.status}</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <WordpressCounterBox
              icon="fas fa-calendar-day"
              title="Data inceperii proiectului"
              text={
                data.stats.aggregated.earliest_date
                  ? dateLocaleRo(new Date(data.stats.aggregated.earliest_date))
                  : 'Proiect neinceput inca'
              }
              className=""
            ></WordpressCounterBox>
            <WordpressCounterBox
              icon="fas fa-user-group"
              title="Numarul de colabolatori"
              text={data.stats.aggregated.count_collaborators}
              className=""
            ></WordpressCounterBox>
            <WordpressCounterBox
              icon="fas fa-clock-rotate-left"
              title="Ultimul update"
              text={
                'Acum ' +
                formatDistanceToNow(new Date(data.project.updatedAt || null), { locale: ro })
              }
              className=""
            ></WordpressCounterBox>

            <WordpressCounterBox
              icon="fas fa-clock"
              title="Numarul de ore lucrate"
              text={Math.floor(data.stats.aggregated.duration_total / 60)}
              className=""
            ></WordpressCounterBox>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-6 ">
            <Link href={`/admin/timesheets/projects/${data.project._id}`}>
              <button className="flex items-center p-2.5 bg-primary text-white text-base gap-2 rounded-lg">
                <i className="fas fa-clock" />
                Arata Timesheet
              </button>
            </Link>
            <Link href={`/admin/projects/${data.project._id}/edit`}>
              <button className="flex items-center p-2.5 bg-secondary text-white text-base gap-2 rounded-lg">
                <i className="fas fa-edit" />
                Editeaza proiect
              </button>
            </Link>
          </div>
          {data.project.active && (
            <button
              className="flex items-center p-2.5 bg-accent text-white text-base gap-2 rounded-lg"
              onClick={handleClick}
            >
              <i className="fas fa-trash" />
              Șterge proiect
            </button>
          )}
          {!data.project.active && (
            <button
              className="flex items-center p-2.5 bg-secondary text-white text-base gap-2 rounded-lg"
              onClick={handleClick}
            >
              <i className="fas fa-arrow-up" />
              Reactiveaza proiect
            </button>
          )}
        </div>
      </div>
      {data.project.active && (
        <AreYouSureRomanian
          isOpen={isOpen}
          hide={hideModal}
          iAmSure={() => handleDelete(data.project._id)}
        >
          Esti sigur ca doresti sa stergi acest proiect?
        </AreYouSureRomanian>
      )}
      {!data.project.active && (
        <ReactivateProject
          isOpen={isOpen}
          hide={hideModal}
          iAmSure={() => handleReactivate(data.project._id)}
        >
          Esti sigur ca doresti sa reactivezi acest proiect?
        </ReactivateProject>
      )}
    </div>
  );
};

export default Project;
