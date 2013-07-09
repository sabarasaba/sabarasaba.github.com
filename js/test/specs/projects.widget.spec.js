define(
  [
    'app/widgets/projects/projects.widget'
  ],
  function(ProjectsWidget) {
    'use strict';

    // describe('Todo Spec:', function() {

      describe('Projects Widget ->', function() {

        it('should be true', function(){
          expect(1).toBe(1);
        });
      });

    //   describe('Todo Widget ->', function() {

    //     var view, input;

    //     beforeEach(function() {
    //       this.view = new TodoWidget({
    //         channel: Postal.channel('widgets')
    //       });

    //       this.view.render();

    //       this.input = this.view.$('#todo-input');
    //     });

    //     it('should render the todo-input', function(){
    //       expect(this.input.length).toBe(1);
    //     });

    //     it('should add an element on keypress', function(){
    //       this.view.$('#todo-input').val('test todo');
    //       this.view.$('#todo-input').trigger($.Event('keypress', {which:13}));

    //       setTimeout(function(){
    //         expect(this.view.el.innerHTML).toContain('test todo');
    //       }, 1000);
    //     });

    //     it('should have the ability to mark a todo as completed', function(){
    //       this.view.$('#todo-input').val('test todo');
    //       this.view.$('#todo-input').trigger($.Event('keypress', {which:13}));


    //       this.view.$('ul.todo-list li:first span').trigger('click');

    //       setTimeout(function(){
    //         expect(this.view.$('ul.todo-list li:first span').hasClass('strike')).toBeTruthy();
    //       }, 1000);
    //     });

    //   });
    // });
  }
);
