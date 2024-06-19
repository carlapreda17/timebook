import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { votePoll } from '../../api/polls';
import { toaster } from '../../lib';
import { initialValues, validationSchema } from '../../models/addPollAnswer';
import { PollRadioFields, Submit } from '../Fields';
import {
  PollResultCard,
  PollSingleAnswerQuestionSection,
  PollTotalVoted,
  SeeResultPollButton,
} from '../Polls';
import Tooltip from '../Tooltip';

const PollFormSingleAnswer = ({ poll, refetch, role }) => {
  const [pollData, setPollData] = useState({ answer: '' });
  const [detailsAreVisible, setDetailsAreVisible] = useState(false);

  const handleSubmit = async (values) => {
    try {
      await votePoll(poll._id, values);
      toaster.success('Votul a fost inregistrat cu succes!');
      refetch();
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
      toaster.error('Votul nu a putut fi adaugat');
    }
  };

  const onClickSeeDetailsHandle = (e) => {
    e.preventDefault();
    setDetailsAreVisible((prevState) => !prevState);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <PollSingleAnswerQuestionSection {...{ poll, role }} />

        {poll.hasVoted || detailsAreVisible || !poll.active ? (
          <PollResultCard poll={poll} />
        ) : (
          <PollRadioFields {...{ poll, pollData, setPollData }} />
        )}
        <div className="mt-10 flex w-full flex-col justify-between mx-auto gap-5 flex-wrap sm:flex-row">
          <PollTotalVoted
            totalVotes={poll.totalVotes}
            className="text-gray-500 text-sm dark:text-slate-400"
          />
          <div className="flex items-center gap-5">
            {poll.isAnonymous && (
              <Tooltip icon="fa-solid fa-user-secret text-2xl text-primary dark:text-sky-500">
                Anonim
              </Tooltip>
            )}
            {!poll.hasVoted && poll.active && (
              <div className="flex items-center justify-between gap-5 flex-wrap">
                {role === 'admin' && (
                  <SeeResultPollButton {...{ detailsAreVisible, onClickSeeDetailsHandle }} />
                )}

                <div className="w-full sm:w-auto inline">
                  <Submit
                    className="w-full px-5 py-2 bg-primary text-white rounded-md"
                    disabled={poll.hasVoted || detailsAreVisible || !poll.active ? true : false}
                  >
                    Voteaza
                  </Submit>
                </div>
              </div>
            )}
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default PollFormSingleAnswer;
