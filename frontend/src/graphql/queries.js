import { gql } from '@apollo/client';

export const GET_BIRTHDAYS = gql`
  query GetBirthdays {
    upcoming_birthdays {
      empname
      birth_date
    }
    recent_birthdays {
      empname
      birth_date
    }
  }
`;

export const FETCH_HOLIDAYS = gql`
  query FetchHolidays {
    holidays {
      name
      date
    }
  }
`;
