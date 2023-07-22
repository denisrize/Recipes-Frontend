<template>
    <div class="container main-container">
        <div class="row">
            <div class="col-lg-6">
                <h1 class="title">Create Recipe</h1>
                <b-form @submit.prevent="onCreateRecipe" @reset.prevent="onReset">
                    <b-form-group id="input-group-title" label-cols-sm="3" label="Title:" label-for="title">
                        <b-form-input id="title" v-model="$v.form.title.$model" type="text"
                            :state="validateState('title')"></b-form-input>
                        <b-form-invalid-feedback v-if="!$v.form.title.required">
                            Title is required
                        </b-form-invalid-feedback>
                        <b-form-invalid-feedback v-else-if="!$v.form.title.length">
                            Title length should be between 3-8 characters long
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-image" label-cols-sm="3" label="Image URL:" label-for="image">
                        <b-form-input id="image" v-model="$v.form.image.$model" type="text"
                            :state="validateState('image')"></b-form-input>
                        <b-form-invalid-feedback v-if="!$v.form.image.required">
                            Image URL is required
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-readyInMinutes" label-cols-sm="3" label="Ready in Minutes:"
                        label-for="readyInMinutes">
                        <b-form-input id="readyInMinutes" type="number" v-model="$v.form.readyInMinutes.$model"
                            :state="validateState('readyInMinutes')"></b-form-input>
                        <b-form-invalid-feedback v-if="!$v.form.readyInMinutes.required">
                            Ready in Minutes is required
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-aggregateLikes" label-cols-sm="3" label="Aggregate Likes:"
                        label-for="aggregateLikes">
                        <b-form-input id="aggregateLikes" type="number" v-model="$v.form.aggregateLikes.$model"
                            :state="validateState('aggregateLikes')"></b-form-input>
                        <b-form-invalid-feedback v-if="!$v.form.aggregateLikes.required">
                            Aggregate Likes is required
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-vegan" label-cols-sm="3" label="Vegan:" label-for="vegan">
                        <b-form-checkbox id="vegan" v-model="$v.form.vegan.$model"
                            :state="validateState('vegan')"></b-form-checkbox>
                        <b-form-invalid-feedback v-if="!$v.form.vegan.required">
                            Vegan is required
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-vegetarian" label-cols-sm="3" label="Vegetarian:" label-for="vegetarian">
                        <b-form-checkbox id="vegetarian" v-model="$v.form.vegetarian.$model"
                            :state="validateState('vegetarian')"></b-form-checkbox>
                        <b-form-invalid-feedback v-if="!$v.form.vegetarian.required">
                            Vegetarian is required
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-glutenFree" label-cols-sm="3" label="Gluten Free:" label-for="glutenFree">
                        <b-form-checkbox id="glutenFree" v-model="$v.form.glutenFree.$model"
                            :state="validateState('glutenFree')"></b-form-checkbox>
                        <b-form-invalid-feedback v-if="!$v.form.glutenFree.required">
                            Gluten Free is required
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group id="input-group-numberOfPortions" label-cols-sm="3" label="Number of Portions:"
                        label-for="numberOfPortions">
                        <b-form-input id="numberOfPortions" type="number" v-model="$v.form.numberOfPortions.$model"
                            :state="validateState('numberOfPortions')"></b-form-input>
                        <b-form-invalid-feedback v-if="!$v.form.numberOfPortions.required">
                            Number of Portions is required
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <!-- Add Ingredient -->
                    <b-form-group>
                        <h4>Add Ingredient</h4>
                        <b-form-input v-model="ingredient.name" placeholder="Name"></b-form-input>
                        <b-form-input v-model="ingredient.amount" placeholder="Amount"></b-form-input>
                        <b-form-input v-model="ingredient.unit" placeholder="Unit"></b-form-input>
                        <b-form-input v-model="ingredient.description" placeholder="Description"></b-form-input>
                        <b-button  variant="primary" @click="addIngredient">Add</b-button>
                    </b-form-group>

                    <!-- Add Instruction -->
                    <b-form-group>
                        <h4>Add Instruction</h4>
                        <b-form-textarea v-model="instruction.description" placeholder="Description"></b-form-textarea>
                        <b-button variant="primary" @click="addInstruction">Add</b-button>
                    </b-form-group>

                    <!-- Add Equipment -->
                    <b-form-group>
                        <h4>Add Equipment</h4>
                        <b-form-input v-model="equipment.name" placeholder="Name"></b-form-input>
                        <b-button variant="primary" @click="addEquipment">Add</b-button>
                    </b-form-group>
                </b-form>
            </div>

            <div class="col-lg-6">
                <!-- Right Column Content -->
                <div class="ingredient-list">
                    <h4>Ingredients</h4>
                    <ul>
                        <li v-for="(ingredient, index) in form.ingredients" :key="index">
                            {{ ingredient.name }} - {{ ingredient.amount }} {{ ingredient.unit }}: {{ ingredient.description
                            }}
                        </li>
                    </ul>
                </div>

                <div class="instruction-list">
                    <h4>Instructions</h4>
                    <ol>
                        <li v-for="(instruction, index) in form.instructions" :key="index">
                            {{ instruction.description }}
                        </li>
                    </ol>
                </div>

                <div class="equipment-list">
                    <h4>Equipment</h4>
                    <ul>
                        <li v-for="(equipment, index) in form.equipments" :key="index">
                            {{ equipment.name }}
                        </li>
                    </ul>
                </div>

                <b-form-group id="input-group-summary" label-cols-sm="3" label="Summary:" label-for="summary">
                    <b-form-textarea
                        id="summary"
                        v-model="$v.form.summary.$model"
                        placeholder="Write a summary of the recipe here.."
                        :rows="3"
                        :max-rows="7"
                        :state="validateState('summary')"
                        ></b-form-textarea>            
                    <!-- <b-form-input id="summary" v-model="$v.form.summary.$model" type="text"
                        :state="validateState('summary')"></b-form-input> -->
                    <b-form-invalid-feedback v-if="!$v.form.summary.required">Summary is required</b-form-invalid-feedback>
                </b-form-group>

                <div class="d-flex justify-content-between">
                    <b-button variant="secondary" @click="onReset">Reset</b-button>
                    <b-button variant="primary" @click="onCreateRecipe">Submit</b-button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import {
    required,
    minLength,
    maxLength,
} from "vuelidate/lib/validators";

export default {
    name: "CreateRecipe",
    data() {
        return {
            form: {
                title: "",
                image: "",
                readyInMinutes: null,
                aggregateLikes: null,
                vegan: false,
                vegetarian: false,
                glutenFree: false,
                numberOfPortions: null,
                ingredients: [],
                instructions: [],
                equipments: [],
                summary: "",
                submitError: undefined
            },
            ingredient: {
                name: "",
                amount: "",
                unit: "",
                description: ""
            },
            instruction: {
                description: ""
            },
            equipment: {
                name: ""
            }
        };
    },
    validations: {
        form: {
            title: {
                required,
            },
            image: {
                required
            },
            readyInMinutes: {
                required
            },
            aggregateLikes: {
                required
            },
            numberOfPortions: {
                required
            },
            glutenFree: {},
            vegan: {},
            vegetarian: {},
            ingredients: {
                required
            },
            instructions: {
                required
            },
            equipments: {
                required
            },
            summary: {
                required
            }
        }
    },
    methods: {
        addIngredient() {
            const newIngredient = { ...this.ingredient };
            this.form.ingredients.push(newIngredient);
            this.clearIngredientFields();
        },
        addInstruction() {
            const newInstruction = { ...this.instruction };
            this.form.instructions.push(newInstruction);
            this.clearInstructionFields();
        },
        addEquipment() {
            const newEquipment = { ...this.equipment };
            this.form.equipments.push(newEquipment);
            this.clearEquipmentFields();
        },
        clearIngredientFields() {
            this.ingredient = {
                name: "",
                amount: "",
                unit: "",
                description: ""
            };
        },
        clearInstructionFields() {
            this.instruction = {
                description: ""
            };
        },
        clearEquipmentFields() {
            this.equipment = {
                name: ""
            };
        },
        validateState(param) {
            const { $dirty, $error } = this.$v.form[param];
            return $dirty ? !$error : null;
        },
        async createRecipe() {

            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            // Save the form data to variables
            const {
                title,
                image,
                readyInMinutes,
                aggregateLikes,
                vegan,
                vegetarian,
                glutenFree,
                numberOfPortions,
                ingredients,
                instructions,
                equipments,
                summary
            } = this.form;

            const recipeData = {
                id: 0,
                title,
                image,
                readyInMinutes,
                aggregateLikes,
                vegan,
                vegetarian,
                glutenFree,
                viewed: true,
                favorite: true,
                ingredients: ingredients.map((ingredient) => ({ ...ingredient })),
                instructions: [...instructions.map((instruction) => instruction.description)],
                numberOfPortions,
                equipment: [...equipments.map((equipment) => equipment.name)],
                summary
            };

            try {

                console.log("This is the recipe data:  ", recipeData)
                // Call your own function here with the form data
                const response = await this.axios.post(
                    this.$root.store.state.server_domain + "/users/my-recipes",
                        recipeData               
                );

                if (response.status === 201) {
                    this.$router.push("myRecipes");
                } else {
                    console.log("Respone status: ", response.status)
                    console.log("Error:", response.data.message);
                }
            } catch (err) {
                console.log(err.response);
                this.form.submitError = err.response.data.message;
            }
        },
        getValidationErrors() {
            const errorMessages = [];
            const formFields = Object.keys(this.$v.form);
            formFields.forEach((field) => {
                if (this.$v.form[field].$error) {
                    const fieldErrors = Object.keys(this.$v.form[field].$params).filter(
                        (param) => !this.$v.form[field][param]
                    );
                    if (fieldErrors.length > 0) {
                        errorMessages.push(`${field}: ${fieldErrors.join(", ")}`);
                    }
                }
            });
            return errorMessages;
        },

        onCreateRecipe() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }
            this.createRecipe();
        },
        onReset() {
            this.form = {
                title: "",
                image: "",
                readyInMinutes: null,
                aggregateLikes: null,
                vegan: false,
                vegetarian: false,
                glutenFree: false,
                numberOfPortions: null,
                ingredients: [],
                instructions: [],
                equipments: [],
                summary: "",
                submitError: undefined
            };
            this.clearIngredientFields();
            this.clearInstructionFields();
            this.clearEquipmentFields();
            this.$nextTick(() => {
                this.$v.$reset();
            });
        }
    }
};
</script>
  
<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.title {
    margin-bottom: 20px;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.col-lg-6 {
    flex-basis: 50%;
    max-width: 50%;
    padding: 0 10px;
}

.ingredient-list,
.instruction-list,
.equipment-list {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 20px;
}

.ingredient-list h4,
.instruction-list h4,
.equipment-list h4 {
    margin-top: 0;
}

ul,
ol {
    padding-left: 20px;
}

ul li,
ol li {
    margin-bottom: 10px;
}

@media (max-width: 767px) {
    .col-lg-6 {
        flex-basis: 100%;
        max-width: 100%;
    }
}
</style>
