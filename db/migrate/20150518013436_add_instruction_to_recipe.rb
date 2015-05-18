class AddInstructionToRecipe < ActiveRecord::Migration
  def change
    add_column :recipes, :instruction, :text
  end
end
