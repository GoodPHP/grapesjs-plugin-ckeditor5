import grapesjs from 'grapesjs';
import cashDom from 'cash-dom';
const stopPropagation = e => e.stopPropagation();

export default grapesjs.plugins.add('gjs-plugin-ckeditor5', (editor, opts = {}) => {
  let defaults = {
    // CKEditor options
    options: {
    },
    
    // On which side of the element to position the toolbar
    // Available options: 'left|center|right'
    position: 'left',
  };
  
  let c = {...defaults, ...opts};

  if (!ClassicEditor) {
    throw new Error('CKEDITOR instance not found');
  }
  editor.setCustomRte({
     enable: async (el, rte) => {
      // If already exists I'll just focus on it
      el.contentEditable = true;
      let rteToolbar = editor.RichTextEditor.getToolbarEl();
      [].forEach.call(rteToolbar.children, (child) => {
        child.style.display = 'none';
      });
      const modal = editor.Modal;
      modal.onceOpen(()=> {
        ClassicEditor.create(document.querySelector(`#${el.id}ckeditor`),c.options);
      });
      modal.onceClose(() => {
        const ckblock = document.querySelector(`.ck-body-wrapper`);
        ckblock.innerHTML = '';
      });
      modal.open({
        title: 'Edit',
        content: `<style>.modalckeditor .ck-editor .ck-editor__editable_inline {min-height:400px}.modalckeditor .ck-editor .ck-content * {color: black;}.modalckeditor .gjs-btn-prim{
          margin: 10px 5px 5px 0;
      }</style><div id="${el.id}ckeditor">${el.innerHTML}</div><input type="button" class="gjs-btn-prim" id="BtnSave" onClick="document.getElementById('${el.id}ckeditor').classList.add('save');" value="Save" title="save"><input class="gjs-btn-prim" id="BtnClose" type="button" value="Close" title="close">`,
        attributes: {
          class: `modalckeditor `,
          id: `mckeditor${el.id}`
        }
      });
      document.getElementById('BtnSave').onclick = function(){
        cashDom(`#${el.id}ckeditor`).html(cashDom(`#mckeditor${el.id} .ck-editor .ck-content`).html());
          cashDom(`#${el.id}ckeditor figure.table.ck-widget`).map((index, element) => {
            cashDom(element).find('table').insertAfter(element);
            cashDom(element).remove();
          })
          cashDom(`#${el.id}ckeditor .ck-horizontal-line.ck-widget`).map((index, element) => {
            cashDom(element).after('<hr />');
            cashDom(element).remove();
          })
          cashDom(`.ck-fake-selection-container`).map((index, element) => {
            cashDom(element).remove();
          })
          
          if(editor.getSelected().getEl().innerHTML != cashDom(`#${el.id}ckeditor`).html()){
            editor.getSelected().components('');
            editor.getSelected().set('content', cashDom(`#${el.id}ckeditor`).html());
          }
        
          cashDom(`#${el.id}ckeditor`).removeClass('save');

        modal.close();
      }
      document.getElementById('BtnClose').onclick = function(){
        modal.close();
      }
    },
    focus(el, rte) {
      el.contentEditable = true;
    },
    disable(el, rte) {
      el.contentEditable = false;
    }
  });

});


