import {
   CLEAR_DAILIES_DATA,
   SET_DAILIES_DATA,
   POPULATE_DAILIES_DATA,
} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
   switch (action.type) {
      case SET_DAILIES_DATA:
         return { ...state, ...action.data };

      case CLEAR_DAILIES_DATA:
         return { ...initialState };

      case POPULATE_DAILIES_DATA:
         return [
            {
               activity_calories: 754,
               activity_stress_duration: 13140,
               activity_time: 12863,
               activity_type: "WALKING",
               avg_hr: 71,
               avg_stress: 27,
               bmr_calories: 2161,
               calendar_date: "2021-05-28",
               distance: 9749,
               duration: 86400,
               end_time: "2021-05-29 04:00:00",
               floor_climbed: 4,
               high_stress_duration: 2400,
               low_stress_duration: 19380,
               max_hr: 115,
               max_stress: 97,
               medium_stress_duration: 6360,
               min_hr: 50,
               moderate_duration: 0,
               participant:
                  "<physioq_project_record_service.db_models.db_participant.Participant object at 0x7f2bcfefdfd0>",
               rest_hr: 57,
               rest_stress_duration: 40200,
               start_time: "2021-05-28 04:00:00",
               start_time_offset: -14400,
               steps: 11459,
               stress_duration: 28140,
               stress_qualifier: "balanced",
               summary_user_id: "x3a123fb",
               vigorous_duration: 0,
            },
            {
               activity_calories: 169,
               activity_stress_duration: 3120,
               activity_time: 3420,
               activity_type: "WALKING",
               avg_hr: 69,
               avg_stress: 25,
               bmr_calories: 1098,
               calendar_date: "2021-05-29",
               distance: 2044,
               duration: 43920,
               end_time: "2021-05-29 16:12:00",
               floor_climbed: 0,
               high_stress_duration: 1140,
               low_stress_duration: 6600,
               max_hr: 113,
               max_stress: 96,
               medium_stress_duration: 3120,
               min_hr: 54,
               moderate_duration: 0,
               participant:
                  "<physioq_project_record_service.db_models.db_participant.Participant object at 0x7f2bcfefdfd0>",
               rest_hr: 61,
               rest_stress_duration: 28080,
               start_time: "2021-05-29 04:00:00",
               start_time_offset: -14400,
               steps: 2402,
               stress_duration: 10860,
               stress_qualifier: "unknown",
               summary_user_id: "x3a123fb",
               vigorous_duration: 0,
            },
         ];

      default:
         return state;
   }
};
