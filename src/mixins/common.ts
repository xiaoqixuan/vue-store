
import { getTimeZone } from '@/utils/index';

export default {
  data() {
    return {
      status: {
        isFetching: false,
        isSending: false,
        isStopRefresh: false,
      },
      timeZoneLabel: `(UTC${getTimeZone()})`,
    };
  },
};
