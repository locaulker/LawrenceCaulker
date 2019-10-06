import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elements, offset) {
    this.itemsToReveal = $("#progress-bar-elements");
    this.itemsToReveal = elements;
    this.offsetPercentage = offset;
    this.progressItems = $("progress-bar");
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
    this.progressItems.attr("progress-bar");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
          $(".progress-bar").each(function () {
            $(this).animate({
              width: $(this).attr("aria-valuenow") + '%'
            }, 1000);
          });
          this.destroy();
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
