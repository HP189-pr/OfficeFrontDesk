import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation ValidateUser($identifier: String!, $password: String!) {
    validateUser(identifier: $identifier, password: $password) {
      userid
      usercode
      username
      usertype
    }
  }
`;

export const FETCH_HOLIDAYS = gql`
  query Fetchholidays($startDate: date!, $endDate: date!) {
    holiday(
      where: { holiday_date: { _gte: $startDate, _lt: $endDate } }
      order_by: { holiday_date: asc }
    ) {
      hdid
      holiday_date
      holiday_name
      holiday_day
    }
  }
`;

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

export const GET_USERS = gql`
  query GetUsers {
    users {
      userid
      usercode
      username
      usertype
      updatedby
      createdat
      updatedat
    }
  }
`;
