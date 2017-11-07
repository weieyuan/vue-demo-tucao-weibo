import utils from "@/widget/utils";

export default {
  filters: {
    formatTime(iTimeValue) {
      return utils.timeFormat(iTimeValue);
    }
  }
}
