// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const date =  now === undefined ? new Date() : new Date(now);
  const day = date.getDate();
  date.setUTCDate(day+days);
  return date;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  const year = appointmentDate.getUTCFullYear();
  const month = (appointmentDate.getUTCMonth()+1).toString().padStart(2, '0');
  const day = appointmentDate.getUTCDate().toString().padStart(2, '0');
  const hours = appointmentDate.getUTCHours().toString().padStart(2, '0');
  const min = appointmentDate.getUTCMinutes().toString().padStart(2, '0');
  const sec = appointmentDate.getUTCSeconds().toString().padStart(2, '0');
  const mil = appointmentDate.getUTCMilliseconds().toString().padStart(3, '0');
  return `${year}-${month}-${day}T${hours}:${min}:${sec}.${mil}Z`
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const details = {
    year: parseInt(timestamp.match(/^\d{4}/)[0], 10),
    month: parseInt(timestamp.match(/-\d{2}-/)[0].replace(/-/g, ''), 10)-1,
    date: parseInt(timestamp.match(/-\d{2}T/)[0].replace(/[-T]/g, ''), 10),
    hour: parseInt(timestamp.match(/T\d{2}:/)[0].replace(/[T:]/g, ''), 10),
    minute: parseInt(timestamp.match(/:\d{2}:/)[0].replace(/:/g, ''), 10),
  };
  return details;
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);

  if ('year' in options) {
    date.setFullYear(options.year);
  }
  if ('month' in options) {
    date.setMonth(options.month); 
  }
  if ('date' in options) {
    date.setDate(options.date);
  }
  if ('hour' in options) {
    date.setHours(options.hour);
  }
  if ('minute' in options) {
    date.setMinutes(options.minute);
  }

  const updatedDetails = {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };

  return updatedDetails;
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const dateA = new Date(timestampA);
  const dateB = new Date(timestampB);
  const timeA = dateA.getTime();
  const timeB = dateB.getTime();
  return Math.round((timeB - timeA)/1000);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return timeBetween(currentTimestamp, appointmentTimestamp) > 0;
}
