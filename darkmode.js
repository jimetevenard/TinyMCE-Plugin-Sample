/**
 * TinyMCE Plugin Sample (c) by Jim Etevenard
 *
 *  TinyMCE Plugin Sample is licensed under a
 *  Creative Commons Attribution-ShareAlike 4.0 International License.
 *
 *  You should have received a copy of the license along with this
 *  work.  If not, see <http://creativecommons.org/licenses/by-sa/4.0/>.
 * 
 * 
 *  Declaration of a new plugin :
 *  =============================
 * 
 *  cf. https://www.tiny.cloud/docs-4x/api/tinymce/tinymce.plugin/
 *
 *  Usefull docs :
 *
 *  - https://www.tiny.cloud/docs-4x/api/tinymce/tinymce.editor/
 *  - https://www.tiny.cloud/docs-4x/api/tinymce.dom/tinymce.dom.domquery/    
 *  - https://www.tiny.cloud/docs-4x/api/tinymce.ui/tinymce.ui.button  
*/
tinymce.PluginManager.add('my_plugin_darkmode', function (editor) {

    // This variable sotres the enabling status.
    let isDark = false;

    // CSS injection.
    let darkmodeCss = 'body.dark { background: #222; color: #FFD; }';
    editor.contentStyles.push(darkmodeCss);

    // Button definition.
    // The id "darkmode" allows adding it to the toolbar (See init at index.html)
    editor.addButton("darkmode", {
        icon: 'moon',
        tooltip: 'Dark mode',
        onclick: function () {
            isDark = !isDark;

            this.active(isDark)
            editor.dom.toggleClass(editor.getBody(), 'dark', isDark);
        }
    });


});
