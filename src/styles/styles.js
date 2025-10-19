import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Main container for the app
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },

  // Header (used in AboutMe.js)
  header: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Each section box (TasbihList, SearchAndAdd, TeacherMessage)
  section: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  // Tasbih List items
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDD',
  },
  itemName: {
    fontSize: 16,
    flex: 1,
  },
  counter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },

  // Input fields (for Search & Add)
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor: '#F8F8F8',
    fontSize: 16,
  },

  // Row for Add button + input field
  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },

  // Teacher Message styling
  teacherMsgBox: {
    backgroundColor: '#E8F0FE',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  teacherMsgText: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
});





